class CreateWordTemps < ActiveRecord::Migration[5.2]
  def change
    create_table :word_temps do |t|
      t.string :word

      t.timestamps
    end
  end
end
