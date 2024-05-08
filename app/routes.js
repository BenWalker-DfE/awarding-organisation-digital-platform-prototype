//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/v1/eligibility1-answers', function(request, response) {

    var elig1 = request.session.data['eligibility1']
    if (elig1 == "X"){
        response.redirect("/layouts/v1/eligibility-check-answers")
    } else if (elig1 == "Y"){
        response.redirect("/layouts/v1/eligibility-check-answers")
    }
})