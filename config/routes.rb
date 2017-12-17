Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :puzzles
    end
  end

  root 'static_pages#index'
end
