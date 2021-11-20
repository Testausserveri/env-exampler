# env-exampler

env-exampler is a script that generates a .env.example file based on the current .env, removing the values.

## Usage

Run `./exampler` in the directory with your .env file.

## Git hook

We recommend [husky](https://github.com/typicode/husky) to generate the git hooks.

1. `npm install husky -D`
2. `npm set-script prepare "husky install"`
3. `npm run prepare`
4. `npx husky add .husky/pre-commit "./exampler"`
5. `git add .husky/pre-commit`
