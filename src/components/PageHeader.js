export function PageHeader({ title, description, parents }) {
  if (!title && !description) return null

  let parent = '';
  if(parents!==null){
    parent = parents[1].title+' '+ (parents[0] ? '→ '+ parents[0].title : '');
  }

  return (
    <header
      id="header"
      className="dark:prose-dark xl:-mt-[0.75rem] mb-[1.875rem] xl:mb-[3.75rem]"
    >
      <p className="mb-3 text-sm leading-6 font-semibold text-orange">{parent}</p>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-0">{title}</h1>
      <div className="mt-0 md:mt-0 -mb-5">
        {description && <p className="text-lg mt-0 md:mt-0">{description}</p>}
      </div>
    </header>
  )
}
