alias pnpm="docker compose run -v ${PWD}:${PWD} -w ${PWD} node pnpm"
alias ps="docker compose run -v ${PWD}:${PWD} -w ${PWD} -p 3000:3000 node pnpm start --host 0.0.0.0"