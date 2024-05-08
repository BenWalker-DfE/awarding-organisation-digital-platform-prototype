//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/eligibility-route', function(request, response) {

var course = request.session.data['course-type']
if (course){
    request.session.data['question-answered'] = 'yes'
}
        response.redirect("/layouts/v1/eligibility-check-answers")
    })