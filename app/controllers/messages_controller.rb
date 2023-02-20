class MessagesController < ApplicationController
  before_action :set_message, only: %i[create update destroy]

  # GET /api/v1/messages
  def index
    @messages = Message.all
  end
end
