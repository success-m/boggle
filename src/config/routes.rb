Rails.application.routes.draw do
  get 'welcome/index'
 
  root 'letters#index'

  get '/letters', to: 'letters#index'
end