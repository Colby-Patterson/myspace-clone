class CreateFakeUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :fake_users do |t|
      t.string :name

      t.timestamps
    end
  end
end
