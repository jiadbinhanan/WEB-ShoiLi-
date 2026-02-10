
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-20_x
    pkgs.nodePackages.pnpm
  ];

  shellHook = ''
    export PATH=$PWD/node_modules/.bin:$PATH
  '';
}
