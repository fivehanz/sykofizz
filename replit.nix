{ pkgs }: {
    deps = [
		pkgs.nodePackages.prettier
        # pkgs.esbuild
        pkgs.nodejs-18_x
        pkgs.nodePackages.pnpm

        pkgs.nodePackages.typescript
        pkgs.nodePackages.typescript-language-server
    ];
}