//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/eligibility-1', function (request, response) {
    const data = request.session.data
    const button = data['button']

    if (button == 'primary') {
        response.redirect("/v1/eligibility2")
    } else if (button == 'secondary') {
        response.redirect("/v1/eligibility")
    }
})

router.post('/eligibility-2', function (request, response) {
    const data = request.session.data
    const button = data['button']

    if (button == 'primary') {
        response.redirect("/v1/eligibility3")
    } else if (button == 'secondary') {
        response.redirect("/v1/eligibility")
    }
})



