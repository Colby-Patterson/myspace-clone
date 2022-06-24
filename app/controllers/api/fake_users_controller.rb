class Api::FakeUsersController < ApplicationController
  def index
    render json: FakeUser.all
  end
end
