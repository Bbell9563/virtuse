class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :time
      t.string :date
      t.string :kind
      t.string :status

      t.timestamps
    end
  end
end
