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
        res.redirect('/ao/v2/check3')
      } else {
        // Send user to ineligible page
        res.redirect('/ao/v2/ineligible-scope')
      }
    
    })

router.post('/scopetq', function (req, res) {
    var scopetq = req.session.data['scopetq']
    if (scopetq == 'yes'){
         // Send user to next page
        res.redirect('/ao/v2/check4-tq')
        } else {
        // Send user to ineligible page
        res.redirect('/ao/v2/ineligible-scope')
        }
        
    })

router.post('/teachdate', function (req, res) {
     var teachdate = req.session.data['teachdate']
     if (teachdate == 'yes'){
         // Send user to next page
         res.redirect('/ao/v2/check4-aaq')
      } else {
         // Send user to ineligible page
        res.redirect('/ao/v2/ineligible-teachdate')
      }
        
   })
   
router.post('/qualtype', function (req, res) {
        var qualtype = req.session.data['qualtype']
        if (qualtype == 'aaq'){
         // Send user to next page
         res.redirect('/ao/v2/check2-aaq')
            } else {
          // Send user to ineligible page
         res.redirect('/ao/v2/check2-tq')
             }
            
 })

router.post('/england', function (req, res) {
    var england = req.session.data['england']
    if (england == 'yes'){
     // Send user to next page
     res.redirect('/ao/v2/check5-aaq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v2/ineligible-england')
         }
        
})

router.post('/england-tq', function (req, res) {
    var england = req.session.data['england']
    if (england == 'yes'){
     // Send user to next page
     res.redirect('/ao/v2/check5-tq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v2/ineligible-england')
         }
        
})

router.post('/national', function (req, res) {
    var national = req.session.data['national']
    if (national == 'yes'){
     // Send user to next page
     res.redirect('/ao/v2/application-overview-aaq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v2/ineligible-national')
         }
        
})

router.post('/national-tq', function (req, res) {
    var national = req.session.data['national']
    if (national == 'yes'){
     // Send user to next page
     res.redirect('/ao/v2/application-overview-tq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v2/ineligible-national')
         }
        
})

router.post('/scopev3', function (req, res) {
    var scope = req.session.data['scope']
    if (scope == 'yes'){
        // Send user to next page
        res.redirect('/ao/v3/check3')
      } else {
        // Send user to ineligible page
        res.redirect('/ao/v3/ineligible-scope')
      }
    
    })

router.post('/scopetqv3', function (req, res) {
    var scopetq = req.session.data['scopetq']
    if (scopetq == 'yes'){
         // Send user to next page
        res.redirect('/ao/v3/check4-tq')
        } else {
        // Send user to ineligible page
        res.redirect('/ao/v3/ineligible-scope')
        }
        
    })

router.post('/teachdatev3', function (req, res) {
     var teachdate = req.session.data['teachdate']
     if (teachdate == 'yes'){
         // Send user to next page
         res.redirect('/ao/v3/check4-aaq')
      } else {
         // Send user to ineligible page
        res.redirect('/ao/v3/ineligible-teachdate')
      }
        
   })
   
router.post('/qualtypev3', function (req, res) {
        var qualtype = req.session.data['qualtype']
        if (qualtype == 'aaq'){
         // Send user to next page
         res.redirect('/ao/v3/check2-aaq')
            } else {
          // Send user to ineligible page
         res.redirect('/ao/v3/check2-tq')
             }
            
 })

router.post('/englandv3', function (req, res) {
    var england = req.session.data['england']
    if (england == 'yes'){
     // Send user to next page
     res.redirect('/ao/v3/check5-aaq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v3/ineligible-england')
         }
        
})

router.post('/england-tqv3', function (req, res) {
    var england = req.session.data['england']
    if (england == 'yes'){
     // Send user to next page
     res.redirect('/ao/v3/check5-tq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v3/ineligible-england')
         }
        
})

router.post('/nationalv3', function (req, res) {
    var national = req.session.data['national']
    if (national == 'yes'){
     // Send user to next page
     res.redirect('/ao/v3/check6-aaq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v3/ineligible-national')
         }
        
})

router.post('/national-tqv3', function (req, res) {
    var national = req.session.data['national']
    if (national == 'yes'){
     // Send user to next page
     res.redirect('/ao/v3/check6-tq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v3/ineligible-national')
         }
        
})

router.post('/sorv3', function (req, res) {
    var sorv3 = req.session.data['sorv3']
    if (sorv3 == 'yes'){
     // Send user to next page
     res.redirect('/ao/v3/application-overview-aaq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v3/ineligible-sor')
         }
        
})

router.post('/sortqv3', function (req, res) {
    var sortqv3 = req.session.data['sortqv3']
    if (sortqv3 == 'yes'){
     // Send user to next page
     res.redirect('/ao/v3/application-overview-tq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v3/ineligible-sor')
         }
        
})

router.post('/scopev4', function (req, res) {
    var scope = req.session.data['scope']
    if (scope == 'yes'){
        // Send user to next page
        res.redirect('/ao/v4/check3')
      } else {
        // Send user to ineligible page
        res.redirect('/ao/v4/ineligible-scope')
      }
    
    })

router.post('/scopetqv4', function (req, res) {
    var scopetq = req.session.data['scopetq']
    if (scopetq == 'yes'){
         // Send user to next page
        res.redirect('/ao/v4/check4-tq')
        } else {
        // Send user to ineligible page
        res.redirect('/ao/v4/ineligible-scope')
        }
        
    })

router.post('/teachdatev4', function (req, res) {
     var teachdate = req.session.data['teachdate']
     if (teachdate == 'yes'){
         // Send user to next page
         res.redirect('/ao/v4/check4-aaq')
      } else {
         // Send user to ineligible page
        res.redirect('/ao/v4/ineligible-teachdate')
      }
        
   })
   
router.post('/qualtypev4', function (req, res) {
        var qualtype = req.session.data['qualtype']
        if (qualtype == 'aaq'){
         // Send user to next page
         res.redirect('/ao/v4/check2-aaq')
            } else {
          // Send user to ineligible page
         res.redirect('/ao/v4/check2-tq')
             }
            
 })

router.post('/englandv4', function (req, res) {
    var england = req.session.data['england']
    if (england == 'yes'){
     // Send user to next page
     res.redirect('/ao/v4/check5-aaq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v4/ineligible-england')
         }
        
})

router.post('/england-tqv4', function (req, res) {
    var england = req.session.data['england']
    if (england == 'yes'){
     // Send user to next page
     res.redirect('/ao/v4/check5-tq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v4/ineligible-england')
         }
        
})

router.post('/nationalv4', function (req, res) {
    var national = req.session.data['national']
    if (national == 'yes'){
     // Send user to next page
     res.redirect('/ao/v4/check6-aaq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v4/ineligible-national')
         }
        
})

router.post('/national-tqv4', function (req, res) {
    var national = req.session.data['national']
    if (national == 'yes'){
     // Send user to next page
     res.redirect('/ao/v4/check6-tq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v4/ineligible-national')
         }
        
})

router.post('/sorv4', function (req, res) {
    var sorv4 = req.session.data['sorv4']
    if (sorv4 == 'yes'){
     // Send user to next page
     res.redirect('/ao/v4/application-overview-aaq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v4/ineligible-sor')
         }
        
})

router.post('/sortqv4', function (req, res) {
    var sortqv4 = req.session.data['sortqv4']
    if (sortqv4 == 'yes'){
     // Send user to next page
     res.redirect('/ao/v4/application-overview-tq')
        } else {
      // Send user to ineligible page
     res.redirect('/ao/v4/ineligible-sor')
         }
        
})