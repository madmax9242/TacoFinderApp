class UserSessionsController < ApplicationController
	skip_before_filter :require_login, except: [:destroy]
  def new
  	@user = User.new
  end

  def create
    if @user = login(params[:email], params[:password])
      # Last minute admin addition which gave me the ability 
      # to delete obnoxious restaurant additions made by my 
      # classmates during my presentation
      $veg = @user.email
      redirect_back_or_to('/user', notice: 'Login successful')
    else
      flash.now[:alert] = 'Login failed'
      render action: 'new'
    end
  end

  def destroy
  	logout
    $veg = ""
    redirect_to(:restaurants, notice: 'Logged out!')
  end
end
