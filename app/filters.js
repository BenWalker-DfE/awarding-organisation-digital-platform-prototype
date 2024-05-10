//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('filter', function (arr) {
    const cleanedArray = arr.flat().filter(Boolean);
    return cleanedArray.length
  })

