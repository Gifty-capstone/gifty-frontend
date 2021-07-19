import {
  titleGift,
  catPic,
  dogPic,
  foxPic,
  otterPic
} from '../fixtures/srcData'

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
              }
            ]
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

  it('should show form to add friend when plus sign is clicked', () => {
    cy.get('svg').click()
      .get('section')
      .get('img').eq(4).should('have.attr', 'src', otterPic)
      .get('h1').contains('New Friend Form')
      .get('label').contains('Name:')
      .get('div input[class=form-name]').should('have.attr', 'placeholder', 'Full Name')
      .get('label').contains('Birthday:')
      .get('div input[type=date]')
      .get('label').contains('Notes:')
      .get('div input[class=form-memo]')
      .get('button').contains('Submit')
  })

  it('should be able to type in inputs and see value updated', () => {
    cy.wait(1000)
      .get('svg').click({force: true})
      .scrollIntoView()
      .should('be.visible')
      .get('div input[class=form-name]').type('Rachel')
      .should('have.value', 'Rachel')
      .get('div input[type=date]').type('2021-08-04')
      .should('have.value', '2021-08-04')
      .get('div input[class=form-memo]').type('Likes gardening')
      .should('have.value', 'Likes gardening')
  })

  it('should be able to fill out form and see friend get added', () => {
      cy.intercept('POST', 'https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends', {
        statusCode: 201,
        body: {
          data: {
            id: 78,
            type: "friend",
            attributes: {
              name: "Melanie",
              birthday: "2021-12-25",
              id: 78,
              memo: "Likes dogs",
              need_gift: true
            },
            relationships: {
              gifts: {
                data: []
              }
            }
          }
        }
      })
    .wait(1000)
    .get('svg').click({force: true})
    .scrollIntoView()
    .should('be.visible')
    .get('div input[class=form-name]').type('Melanie')
    .get('div input[type=date]').type('2021-12-25')
    .get('div input[class=form-memo]').type('Likes dogs')
    .get('button').click()
})

it('should be able to close out of the form when you click the x button', () => {
  cy.get('svg').click()
    .get('svg').eq(1).click()
    .get('h1').contains('Gifty')
    .get('img').eq(0)
    .should('have.attr', 'src', titleGift)
})

it('should redirect when individual friend is clicked', () => {
cy.wait(1000)
  .get('img').eq(1).click()
  .url().should('eq', 'http://localhost:3000/1')
  .get('img').eq(1).should('have.attr', 'src', catPic)
  .get('h1').contains('Tyler')
})
})
