const type = 'website'
const url = 'https://sterlingstrong.life'
const title = 'Sterling Raspe | sterlingstrong.life'
const description = `Sterling lived for 245 days and spent 207 of those days an ICU. She had 9 surgeries, including 4 major heart surgeries. She was a very special little girl. 1 of 4-11 people in the world. That's how special.`
const mainImage = '/i/sterling-strong-beads-of-courage.png'

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description
    }, {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type
    }, {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || url
    }, {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title
    }, {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description
    }, {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage
    }
  ]
}
