let locations = [
    {
        location: "Nashville"
    },
    {
        location: "London"
    },
    {
        location: "New York"
    }
  ];
let budgets = [
    {
        range: "0 - 50"
    },
    {
        range: "50 - 100"
    },
    {
        range: "100 +"
    }
];

$(document).ready(function() {
    for(let i = 0; i < locations.length; ++i ) {
        let locationListItem = document.createElement("li");
        let locationListItemLink = document.createElement("a");
        locationListItemLink.setAttribute("href", "#");
        locationListItem.appendChild(locationListItemLink);
        locationListItemLink.innerHTML = locations[i].location;          
        let menu = document.querySelector(".dropdown-location");
        menu.appendChild(locationListItem);
    }
    for(let i = 0; i < budgets.length; ++i ) {
        let budgetListItem = document.createElement("li");
        let budgetListItemLink = document.createElement("a");
        budgetListItemLink.setAttribute("href", "#");
        budgetListItem.appendChild(budgetListItemLink);
        budgetListItemLink.innerHTML = budgets[i].range;          
        let menu = document.querySelector(".dropdown-budget");
        menu.appendChild(budgetListItem);
    }
});

