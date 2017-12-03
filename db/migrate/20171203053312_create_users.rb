class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, index: true, null: false
      t.string :sex
      t.string :favorite_color
      t.boolean :employed
      t.timestamps
    end
  end
end
