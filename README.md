<h1 align="center">
  Portfolio Gatsby
</h1>

A personal portfolio use as my personal website.

## Description

The idea behind this portfolio was to have a home page for people interested in my work. This portfolio provides:

- professional/personal information about me
- showcase of past and current (maybe also future) projects
- contact information

### Tech Stack

Since the idea was to future-proof this project and make it as easily managable and scalable as possible, JAM stack was a clear choice. Combining a static website generator (SSG) and content management system (CMS).

- Gatsby (SSG)
- Strapi (CMS)
- PostgreSQL (database)
- Cloudinary (image databse)

### Roadmap

This is the first iteration for this project and any feedback or comment for improvment is warmly welcome.

The next step for this project is to connect it to a blogging platforms or even explore more features of Gatsby and create a blog post template.

## 🚀 To see locally

1.  **Clone repository and install dependencies.**

    After cloning the repository navigate to `portfolio-gatsby`

    ```shell
    npm install
    ```

2.  **Add .env file.**

    Create a .env file at the root of the folder.
    Add the following variables:

    ```env
    API_URL=<url_to_your_API>
    ```

3.  **Start developing**
    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `portfolio-gatsby` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Author

Carlos Chavez - [website](https://carloschavez.cc)

## License

Distributed under the [MIT](https://opensource.org/licenses/MIT) license. See LICENSE for more information.

<!-- AUTO-GENERATED-CONTENT:END -->
