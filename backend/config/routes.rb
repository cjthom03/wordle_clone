# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  resources :words, only: [:index]

  # Reroute anything to home
  get "*path", to: redirect("/")
end
