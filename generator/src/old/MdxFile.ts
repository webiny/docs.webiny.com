import frontMatter from "front-matter";
import fs from "fs-extra";

export interface FrontMatterAttributes {
  title: string;
  description: string;
  [key: string]: string;
}

export class MdxFile {
  private readonly filePath: string;
  private contents: string | undefined;
  private attributes: FrontMatterAttributes | undefined;

  public static async create(filePath: string) {
    const mdxFile = new MdxFile(filePath);
    await mdxFile.initialize();
    return mdxFile;
  }

  private constructor(filePath: string) {
    this.filePath = filePath;
  }

  private async initialize() {
    this.contents = await fs.readFile(this.filePath, "utf8");
    const { attributes } = frontMatter<FrontMatterAttributes>(this.contents);
    this.attributes = attributes;
  }

  getFilePath() {
    return this.filePath;
  }

  getContents() {
    return this.contents as string;
  }

  getAttributes() {
    return this.attributes as FrontMatterAttributes;
  }
}

class MdxFileCollection implements Iterable<MdxFile> {
  private items: MdxFile[] = [];

  item() {
    return this.items;
  }

  add(mdxFile: MdxFile) {
    this.items.push(mdxFile);
  }
}

interface Collection<T> {
  add(item: T): void;
  remove(item: T): void;
}

class UniqueCollection implements Collection<any> {
  add(item: any): void {}

  remove(item: any): void {}
}

class JpegFileCollection implements Collection<any> {
  private _collection: UniqueCollection;

  constructor() {
    this._collection = new UniqueCollection();
  }

  add(item: any) {
    this._collection.add(item);
  }

  /**
   * @deprecated Use removeItem instead.
   */
  remove(item: any) {
    this._collection.remove(item);
  }

  getByUrl() {}
}

const random = new UniqueCollection();
const files = new JpegFileCollection();

function doSomething(collection: Collection<any>) {
  collection.add(1);
}

doSomething(random);
doSomething(files);

interface IFoldersRepository {
  getFolders(): Promise<any[]>;
}

interface UseCase {
  execute(...args: any[]): Promise<void>;
}

class GetChildFoldersByParentId implements UseCase {
  private foldersRepository: IFoldersRepository;

  constructor(foldersRepository: IFoldersRepository) {
    this.foldersRepository = foldersRepository;
  }

  async execute(parentId: string) {
    const folders = await this.foldersRepository.getFolders();
  }
}

class UseCaseDecorator implements UseCase {
  private useCase: UseCase;
  private authService: AuthService;

  constructor(authService: AuthService, useCase: UseCase) {
    this.authService = authService;
    this.useCase = useCase;
  }

  execute(...args: any[]) {
    console.log(`User: ${this.authService.getIdentity()}`);
    return this.useCase.execute(...args);
  }
}

interface IAuthentication {
  getIdentity(): string;
}

class AuthService1 implements IAuthentication {
  getIdentity() {
    return "me!";
  }
}

class AuthService implements IAuthentication {
  private readonly authenticators: IAuthentication[];

  constructor(authenticators: IAuthentication[]) {
    this.authenticators = authenticators;
  }

  getIdentity() {
    for (const authenticator of this.authenticators) {
      const identity = authenticator.getIdentity();
      if (identity) {
        return identity;
      }
    }

    return "Not found";
  }
}

class OktaAuth implements IAuthentication {
  getIdentity(): string {
    return "okta:id";
  }
}

class Auth0 implements IAuthentication {
  getIdentity(): string {
    return "auth0:id";
  }
}

class AuthCache implements IAuthentication {
  private authService: AuthService;
  private cache: any;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  getIdentity(): string {
    if (!this.cache) {
      this.cache = this.authService.getIdentity();
    }

    return this.cache;
  }
}

const authService = new AuthCache(new AuthService([new OktaAuth(), new Auth0()]));

authService.getIdentity();

/////////////////////////////////////////////////////////////
const childFolderUseCase = new GetChildFoldersByParentId();

const decoratedChildFolderUseCase = new UseCaseDecorator(authService, childFolderUseCase);

decoratedChildFolderUseCase.execute(1);
