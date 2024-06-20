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
        response.redirect("/ao/v1/eligibility2")
    } else if (button == 'secondary') {
        response.redirect("/ao/v1/eligibility")
    }
})

router.post('/eligibility-2', function (request, response) {
    const data = request.session.data
    const button = data['button']

    if (button == 'primary') {
        response.redirect("/ao/v1/eligibility3")
    } else if (button == 'secondary') {
        response.redirect("/ao/v1/eligibility")
    }
})

router.post('/eligibility-3', function (request, response) {
    const data = request.session.data
    const button = data['button']

    if (button == 'primary') {
        response.redirect("/ao/v1/eligibility4")
    } else if (button == 'secondary') {
        response.redirect("/ao/v1/eligibility")
    }
})

router.post('/eligibility-4', function (request, response) {
    const data = request.session.data
    const button = data['button']

    if (button == 'primary') {
        response.redirect("/ao/v1/eligibility")
    }
})

router.post('/scope', function (req, res) {
    var scope = req.session.data['scope']
    if (scope == 'yes'){
        // Send user to next page
        res.redirect('/ao/v2/check2')
      } else {
        // Send user to ineligible page
        res.redirect('/ao/v2/ineligible1')
      }
    
    })

router.post('/teachdate', function (req, res) {
     var teachdate = req.session.data['teachdate']
     if (teachdate == 'yes'){
         // Send user to next page
         res.redirect('/ao/v2/check3')
      } else {
         // Send user to ineligible page
        res.redirect('/ao/v2/ineligible1')
      }
        
   })
   
router.post('/qualtype', function (req, res) {
        var qualtype = req.session.data['qualtype']
        if (qualtype == 'yes'){
         // Send user to next page
         res.redirect('/ao/v2/qualtype')
            } else {
          // Send user to ineligible page
         res.redirect('/ao/v2/ineligible1')
             }
            
 })