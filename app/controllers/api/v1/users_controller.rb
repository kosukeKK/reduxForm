class Api::V1::UsersController < ApplicationController
  def index
    @user = User.first
    render :index, formats: 'json'
  end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.json { render json: 'true', status: :created }
      else
        format.json { render json: 'false', status: :unprocessable_entity }
      end
    end
  end

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
