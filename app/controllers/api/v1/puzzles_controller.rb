class Api::V1::PuzzlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    puzzle = Puzzle.create
    puzzle_payload = JSON.parse(request.body.read)
    index_in_puzzle_payload = 0
    puzzle_payload.each do |value|
      Square.create(value: value, index_in_puzzle: index_in_puzzle_payload, puzzle_id: puzzle.id)
      index_in_puzzle_payload += 1
    end
    render json: puzzle.squares
  end
end
