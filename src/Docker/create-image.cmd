docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat16/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamat16/app ../..
