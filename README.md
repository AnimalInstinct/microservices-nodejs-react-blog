# CQRS microservices example based on NodeJS and ReactJS containers deployed into Kubernetes microk8s cluster

## Installation

Created and tested in Ubuntu Microk8s

Install Microk8s

```bash
sudo snap install microk8s --classic
```

### Commands reminder:

Add local image to microk8s:

docker save mynginx > myimage.tar
microk8s ctr image import myimage.tar
microk8s ctr images ls

microk8s kubectl rollout restart deployment posts-depl [name]

microk8s kubectl get deployments

microk8s kubectl get pods

microk8s kubectl describe pod/deployment [name]

microk8s kubectl describe deployment/pod [name]

microk8s kubectl delete deployment/pod [name]
