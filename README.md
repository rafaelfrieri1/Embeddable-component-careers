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

![image](https://user-images.githubusercontent.com/46950699/182752083-63e4ae69-e619-4699-98cb-fa94aa2757f9.png)

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

![image](https://user-images.githubusercontent.com/46950699/182752015-855ab48d-d317-43f0-8f07-3a11e2c90568.png)

## Source code

If you want to look at the human readable version of the embeddable component please refer to this file https://github.com/rafaelfrieri1/Embeddable-component-careers/blob/main/Embeddable_Component_Careers.js.
