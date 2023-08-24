defmodule Sykofizz.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      SykofizzWeb.Telemetry,
      # Start the Ecto repository
      Sykofizz.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Sykofizz.PubSub},
      # Start Finch
      {Finch, name: Sykofizz.Finch},
      # Start the Endpoint (http/https)
      SykofizzWeb.Endpoint
      # Start a worker by calling: Sykofizz.Worker.start_link(arg)
      # {Sykofizz.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Sykofizz.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    SykofizzWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
