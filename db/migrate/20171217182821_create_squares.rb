class CreateSquares < ActiveRecord::Migration[5.0]
  def change
    create_table :squares do |t|
      t.belongs_to :puzzle

      t.integer :index_in_puzzle
      t.integer :value

      t.timestamps
    end
  end
end
