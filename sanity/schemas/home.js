export default {
    name: 'home',
    type: 'document',
    title: 'Home',
    fields: [
        {
            name:'Section',
            type: 'string',
            title: 'Page Section'
        },
        {
            name: 'Section_Title',
            type: 'string',
            title: 'Section title'
        },
        {
            name: 'Section_Description',
            type: 'string',
            title: 'Section Description'
        },
        {
            name: 'Section_Button',
            type: 'string',
            title: 'Section Button'
        },
        {
            name: 'Section_Image',
            type: 'array',
            of: [{type: 'image'}],
            title: 'Section Image'
        },
        
    ]
}