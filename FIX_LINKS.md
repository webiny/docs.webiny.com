To force Next to show all build errors, open the following file:

```
node_modules/next/dist/build/index.js
```

And comment out line `476`. Otherwise, Next will only print the first 5 errors and quit.

After that, run `yarn build` and wait for broken links output to appear.
