Rails.application.routes.draw do
  get 'welcome/index'
 
  root 'welcome#index'

  get '/letters', to: 'letters#index'
end