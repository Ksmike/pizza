"use strict";
var Pizza = {
	toppings: ['Cheese', 'Tomato', 'Pepperoni', 'Peppers', 'Onions', 'Bacon', 'Olives'],
	bases: ['Thin', 'Deep Pan', 'stonebake'],
	thePizza: {
		base: '',
		toppings: []
	},
	init: function () {

		this.generateBaseTable();
		this.generateToppingsTable();
		this.addButtonInteraction();
		this.makeMyPizza();

	},
	generateBaseTable: function () {
		var baseList = document.querySelector('.base-list'),
			listHTML = '';

		if (typeof this.bases !== 'undefined') {
			for (var i = 0; i < this.bases.length; i++) {
				listHTML += this.generateBasesList(this.bases[i]);
			}

			if (baseList) {
				baseList.innerHTML = listHTML;
			}
		}
	},
	generateBasesList: function (baseType) {
		return '<li>' +
				'<div class="base-type" data-bases="' + baseType + '">' + baseType + '</div>' +
				'</li>';
	},
	generateToppingsTable: function () {
		var toppingList = document.querySelector('.toppings-list'),
			listHTML = '';

		if (typeof this.toppings !== 'undefined') {
			for (var i = 0; i < this.toppings.length; i++) {
				listHTML += this.generateToppingsList(this.toppings[i]);
			}

			if (toppingList) {
				toppingList.innerHTML = listHTML;
			}
		}
	},
	generateToppingsList: function (toppingType) {
		return '<li>' +
				'<div class="topping-type" data-topping="' + toppingType + '">' + toppingType + '</div>' +
				'</li>';
	},
	addButtonInteraction: function () {

		$('.base-list li').click(function (evt) {
			this.handleBaseInteraction(evt);
		}.bind(this));

		$('.toppings-list li').click(function (evt) {
			this.handleToppingInteraction(evt);
		}.bind(this));

	},
	handleBaseInteraction: function (e) {
		this.thePizza.base = e.target.dataset.bases;
		this.makeMyPizza();
	},
	handleToppingInteraction: function (e) {
		var toppingType = e.target.dataset.topping;

		this.thePizza.toppings.unshift(toppingType);
		this.makeMyPizza();
	},
	makeMyPizza: function () {
		var pizzaList = document.querySelector('.pizza-list'),
		listHTML = '';

		if (typeof this.thePizza !== 'undefined') {
			for (var i = 0; i < this.thePizza.toppings.length; i++) {
				listHTML += this.generatePizzaList(i);
			}

			if (pizzaList) {
				pizzaList.innerHTML = listHTML;
			}
		}

	},
	generatePizzaList: function (i) {
		return '<li><div class="myPizza" data-base="' + this.thePizza.base + '" data-topping="' + this.thePizza.toppings + '">' +
			' This pizza has a ' + this.thePizza.base + ' base and has ' + i + ' toppings!</div></li>';
	}
}

$(function() {
	Pizza.init();
});