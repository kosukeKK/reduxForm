Rails.application.routes.draw do
  root 'top#index'
  namespace :api do
    namespace :v1 do
      namespace :users do
        get '/', action: 'index'
        post '/', action: 'create'
      end
    end
  end
end
