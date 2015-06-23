class UsersController < ApplicationController
  skip_before_filter :require_login, only: [:index, :new, :create ]
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  

  # Shows all of the restaurants
  def index
     redirect_to :restaurants
  end

  # Utilizes the google maps API to show where the restaurant is on the map
  def show
  end

  # Makes a new use
  def new
    @user = User.new
  end

  # Edits users
  def edit
    @users = User.all
  end

  # Creates/saves new user to the database
  def create
    @user = User.new(user_params)

    #respond_to do |format|
      if @user.save
        auto_login(@user)
        redirect_to(@user, notice: 'User was successfully created')
      else
        render :new 
      end
    #end
  end

  # Update user
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # Deletes user
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = current_user
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :spicy, :vegetarian)
    end
end
