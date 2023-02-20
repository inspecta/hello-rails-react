class Api::V1::MessagesController < ApplicationController
  # Get all messages

  def index
    @messages = Message.all
    render json: @messages
  end

  # Get a random message

  def show
    @message = Message.order('RANDOM()').limit(1).first
    render json: @message
  end
end
