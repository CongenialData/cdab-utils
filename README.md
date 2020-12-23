# Introduction

Some handy utilities that could come in hand.

## Getting started

1. Clone your forked repository to your computer

```bash
git clone git@github.com:<your-github-username>/cdab-utils.git
```

2. Keep your fork in sync to avoid merge conflics

```bash
git remote add upstream git@github.com:CongenialData/cdab-utils.git
git pull upstream main
```

3. Install dependencies

```bash
npm install
```

4. Validate and build the project

```bash
npm run validate
```

## Develop instructions

### 1. Start working on a new feature

Make sure you have pulled the latest `main` branch and installed all the dependencies.

1. `git checkout -b feature/XXXXX`
2. Work in the `src` folder

### 2. Preparing build

_Note: Try to only do one commit on each feature branch._

#### Build

Validate your changes and create the build before commiting.

```bash
npm run validate
```

This will save the build to the `lib` folder.

#### Test the changes

You can now test the changes. How you would do this depends on what type of changes you are developing. One way would be
to linking the local package to a project on your computer and use it.

<https://docs.npmjs.com/cli/link.html>

### 3. Commit changes

When you are ready to commit your changes, run the following command:

```bash
npm run commit
```

This will use [Commitizen](http://commitizen.github.io/cz-cli/) to create the commit.

If you want someone to review your changes, please create a pull request to the `main` branch. Otherwise you can merge
your changes directly to `main` locally.

```bash
git checkout main
git merge FEATURE/XXXXX
```

### 4. Creating a release

#### Preparations

```bash
npm run release
```

This will bump versions based on commit types, add commit descriptions to CHANGELOG.md, and create git tags according to
the current version).

#### Push source code

Push changes and git tags to main branch using:

```bash
git push --follow-tags origin main
```

Now is the last moment to be able to review any changes before publishing the package.

#### Publish release

```bash
npm publish
```

This will publish the code to the NPM Artifact Feed in DevOps. The feed is defined in `.npmrc`.

## References

<https://medium.com/tunaiku-tech/automate-javascript-project-versioning-with-commitizen-and-standard-version-6a967afae7>

<https://docs.npmjs.com/cli/link.html>

<http://commitizen.github.io/cz-cli/>
