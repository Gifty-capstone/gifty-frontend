import {
  catPic,
  titleGift
} from '../fixtures/srcData'

describe('Friend Page', () => {
      beforeEach(() => {
            cy.intercept('https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends', {
              "data": {
                "id": "1",
                "type": "user",
                "attributes": {
                  "name": "Dione Travis",
                  "email": "user@email.com",
                  "birthday": "2020-11-03"
                },
                "relationships": {
                  "friends": {
                    "data": [{
                      "id": "1",
                      "type": "friend"
                    }]
                  }
                }
              },
              "included": [{
                "id": "1",
                "type": "friend",
                "attributes": {
                  "name": "Tyler",
                  "birthday": "2020-12-11",
                  "id": 1,
                  "memo": " Enjoys things",
                  "need_gift": false
                },
                "relationships": {
                  "gifts": {
                    "data": [{
                      "id": "1",
                      "type": "gift"
                    }]
                  }
                }
              }]
            })
            cy.visit('http://localhost:3000')

              .intercept('https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends/1/gifts', {
                "data": {
                  "id": "1",
                  "type": "friend",
                  "attributes": {
                    "name": "Tyler",
                    "birthday": "2020-12-11",
                    "id": 1,
                    "memo": " Enjoys things",
                    "need_gift": false
                  },
                  "relationships": {
                    "gifts": {
                      "data": [{
                          "id": "1",
                          "type": "gift"
                        }]
                    }
                  }
                },
                "included": [{
                  "id": "1",
                  "type": "gift",
                  "attributes": {
                    "name": "Lego",
                    "description": "building blocks",
                    "status": "purchased",
                    "products": [{
                        "id": null,
                        "keyword": "Lego",
                        "name": "New Lego Star Wars 332nd Company Clone Trooper Minifigure",
                        "cost": "40.00",
                        "description": "For sale is one (1) lego Star Wars 332nd Company Clone Trooper Minifigure\n\nWhat you see in the picture is what you get.\n\nBrand new, mint condition. 100% Genuine. \n\n\n\n\n\n\n\nLEGO®, the LEGO logo, the configuration of bricks and studs, the mini figure and LEGOLAND are trademarks of the Lego Group. © 2020 The LEGO Group. LEGO® is a trademark of the LEGO Group which does not sponsor, authorize or endorse this site, product or Etsy Store. LEGO® trademarks are used for the clear identification of LEGO® products and should not constitute a violation of property rights. \n\n© 2020 Lucasfilm Ltd. & TM. All rights reserved. Star Wars ™ and all affiliated brands are registered trademarks of Lucasfilm Ltd.",
                        "product_url": "https://www.etsy.com/listing/897987991/new-lego-star-wars-332nd-company-clone?utm_source=gifty&utm_medium=api&utm_campaign=api"
                      }]
                    }
                  }]
                    })
                    cy.wait(1000)
                      .get('h2').contains('Tyler').click()
                })
                it('should display friend page', () => {
                  cy.get('h2').eq(0).contains('Dione Travis\'s Gift Planner')
                    .get('h1').eq(0).contains('Gifty')
                    .get('img').eq(0)
                    .should('have.attr', 'src', titleGift)
                    .get('h1').eq(1).contains('Tyler')
                    .get('img').eq(1)
                    .should('have.attr', 'src', catPic)
                    .get('h2').eq(1).contains('December 11')
                    .get('p').eq(0).contains('Enjoys things')
                    .get('section > svg')
                    .get('h3').eq(0).contains('Add a gift idea for Tyler')
                    .get('h3').eq(1).contains('Lego')
                    .get('img').eq(2)
                    .should('have.attr', 'src', '/static/media/gift1.5b88ec3d.png')
                    .get('p').eq(1).contains('Purchased')
                    .get('path')
                    .get('button').eq(0).contains('Back to main')
                    .get('button').eq(1).contains('Delete friend')
                })
              })
