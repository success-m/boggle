Rails.application.routes.draw do
  root 'letters#index'

  # get '/letters', to: 'letters#index'
  get '/get/:word(.:format)', to: 'words#index'
end
