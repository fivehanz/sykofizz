{
  description = "A Nix-flake-based PHP development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/release-22.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { self
    , nixpkgs
    , flake-utils
    }:

    flake-utils.lib.eachDefaultSystem (system:
    let
      overlays = [
        (self: super: rec {
          nodejs = super.nodejs-18_x;
          yarn = (super.yarn.override { inherit nodejs; });
        })
      ];
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShell = pkgs.mkShell {
        packages = with pkgs; [ phpPackages.composer php fish node2nix nodejs yarn ];

        shellHook = ''
          echo "`${pkgs.php}/bin/php --version`"
          echo "node `${pkgs.nodejs}/bin/node --version`"
          fish
        '';
      };
    });
}
