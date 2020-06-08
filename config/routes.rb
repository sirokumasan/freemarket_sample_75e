Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  devise_scope :user do 
    post 'person_infos', to: 'users/registrations#create_person_info'
    post 'addresses',    to: 'users/registrations#create_address'
  end

  root 'items#index'
  
  resources :users, only: :show do
    resources :cards, only: :new
    member do
      get :logout, :card
    end
  end
  
  resources :items, except: :index do
    collection do 
      get 'get_category_children', defaults: { format: 'json' }
      get 'get_category_grandchildren', defaults: { format: 'json' }
    end
  end

end
