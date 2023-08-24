defmodule Sykofizz.Repo do
  use AshPostgres.Repo,
    otp_app: :sykofizz

  def installed_extensions do
    ["uuid-ossp", "citext"]
  end
end
