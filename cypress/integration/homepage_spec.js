import { titleGift, catPic, dogPic, foxPic } from '../fixtures/srcData'

describe('Home Page', () => {
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
                        },
                        {
                          "id": "2",
                          "type": "friend"
                        },
                        {
                          "id": "3",
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
                                },
                                {
                                  "id": "2",
                                  "type": "gift"
                                }
                              ]
                            }
                          }
                        }, {
                          "id": "2",
                          "type": "friend",
                          "attributes": {
                            "name": "Jack",
                            "birthday": "2020-11-09",
                            "id": 2,
                            "memo": " Enjoys stuff",
                            "need_gift": false
                          },
                          "relationships": {
                            "gifts": {
                              "data": [{
                                  "id": "3",
                                  "type": "gift"
                                },
                                {
                                  "id": "4",
                                  "type": "gift"
                                }
                              ]
                            }
                          }
                        }, {
                          "id": "3",
                          "type": "friend",
                          "attributes": {
                            "name": "Sophie",
                            "birthday": "2020-07-08",
                            "id": 3,
                            "memo": " Enjoys all sorts of things and stuff",
                            "need_gift": true
                          },
                          "relationships": {
                            "gifts": {
                              "data": [{
                                "id": "5",
                                "type": "gift"
                              }]
                            }
                          }
                        }]

                    })
                  cy.visit('http://localhost:3000')
                })

              it('should show header', () => {
                cy.get('h1').contains('Gifty')
                  .get('img').eq(0)
                  .should('have.attr', 'src', titleGift)
                  .get('h2').contains('Dione Travis\'s Gift Planner')
              });

              it('should show upcoming birthdays section', () => {
                cy.get('section').eq(0)
                  .get('h3').eq(0).contains('Upcoming Birthdays')
              })

              it('should show add friend section', () => {
                cy.get('section').eq(1)
                  .get('label').contains('Add a friend')
                  .get('svg').should('have.attr', 'class', 'fa fa-plus')
              })

              it('should show friends', () => {
                cy.wait(1000)
                  .get('h1').eq(1).contains('Friends')
                  .get('img').eq(1).should('have.attr', 'src', catPic)
                  .get('h2').eq(1).contains('Tyler')
                  .get('img').eq(2)
                  .should('have.attr', 'src', dogPic)
                  .get('h2').eq(2).contains('Jack')
                  .get('img').eq(3)
                  .should('have.attr', 'src', foxPic)
                  .get('h2').eq(3).contains('Sophie')

              })
            });
