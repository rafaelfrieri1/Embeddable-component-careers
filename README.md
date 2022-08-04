# Embeddable-component-careers

## How to use this component

The following is the base code needed to use this embeddable component in your web page:

```html
<div id="career-page"></div>
<script src="https://rafaelfrieri1.github.io/Embeddable-component-careers/minified_component.js"></script>
<script>
  setOrganizationCode(your_organization_id)
</script>
```

It should look something like this:

Ingresar imagen aquí.

## How to style

We have the following available classes to style the code:

```css
.job-list
.job-list__item
.job-list__item--title
.job-list__item--compensation
.job-list__item--location
.job-list__item--CTA
```

For more context on what those classes mean look at the #careers design file.

One CSS example to style this componente might be the following:

```css
.job-list {
  list-style-type: none;
  font-family: Sans-Serif;
  display: inline-flex;
  flex-direction: column;
}

.job-list__item {
  padding: 1rem;
  background-color: #27292D;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  flex-direction: column;
  position: relative;
}

.job-list__item--title {
  text-decoration: none;
  display: inline-block;
  color: #CDDC39;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
}

.job-list__item--compensation {
  color: #EAEAEA;
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 0.25rem;
}

.job-list__item--location {
  color: #FFFFFFA6;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 1rem;
}

.job-list__item--CTA {
  display: inline-block;
  border-radius: 20px;
  text-decoration: none;
  background-color: #CDDC39;
  font-size: 14px;
  color: #27292D;
  padding: 0.5rem 1rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  text-transform: uppercase;
  box-shadow: -2px -2px 2px rgba(56, 59, 64, 0.7), 2px 2px 6px rgba(1, 1, 1, 0.5);
}
```

And it should look something like this:

Ingresar imagen aquí

## Installation

The project uses Scala version 2.13.7 and needs sbt to be run. Also, the database runs in a MySQL Docker container, so to run the project we will also need Docker.

First, to set up the key to access the OMDB API key, it is needed to access the `conf/application.conf` file in the project and change the value `"OMDB_API_KEY"` for the value of the key in a string.

Then to set up the database run the following command in the root folder of the project:

```bash
docker-compose up -d
```

And the database container should be running in the port 3306.

Then to run the project after setting up the database use the following command:

```bash
sbt run
```

Then, the project should be running in `http://localhost:9000`. Access the application homepage `http://localhost:9000` through the browser to run the evolutions and a welcoming message from the API should be shown. After that the application should be running successfully and the endpoints should be accessible.

To stop running the application use:

```bash
Ctrl/Cmd + D
```

To run the tests use the following command:

```bash
sbt test
```
