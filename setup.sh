# Get a test image
mkdir -p testimages
if [ ! -f testimages/space.jpg ]; then
    curl -o testimages/space.jpg https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LARGE_elevation.jpg/1600px-LARGE_elevation.jpg
fi

docker stop melon
docker rm melon
docker build -t cantaloupe docker-cantaloupe
docker run -d -p 8182:8182 --name melon -v $(pwd)/testimages:/var/lib/cantaloupe/images/ cantaloupe
 