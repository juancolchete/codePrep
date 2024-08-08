class NodeItem{
  name: string
  neighbors: NodeItem[]
  
  constructor(name: string){
    this.neighbors = []
    this.name = name
  }

  addNeighbors(node: NodeItem){   
    this.neighbors.push(node)
  }
}

class Graph{
  nodes: NodeItem[] = []
  
  addNode(name: string){
    const node = new NodeItem(name)
    this.nodes.push(node)
  }
  
  addVertice(source:NodeItem, destination:NodeItem){
    source.addNeighbors(destination)
    destination.addNeighbors(source)
  }
}

class SocialNetworkGraph{
  graph = new Graph()
  getUser(name:string): NodeItem{
    for(let i=0;i < this.graph.nodes.length;i++){
      if(this.graph.nodes[i].name == name){
        return this.graph.nodes[i]
      }
    }
    return new NodeItem("")
  }
  hasUser(name:string){
    if(this.getUser(name).name.length > 0){
      return true
    }
    return false
  }
  addUser(name:string){
    if(this.hasUser(name) == true){
      throw "User alredy registered"
    }else{
      this.graph.addNode(name)
    }
  }
  hasFriendship(sourceName:string,destName:string){
    const sourceNode = this.getUser(sourceName)
    if(sourceNode?.name?.length > 0){
      for(let i=0;i < sourceNode.neighbors.length;i++){
        if(sourceNode.neighbors[i].name == destName){
          return true;
        }
      }
    }else{
      throw "User not registered"
    }
    return false;
  }
  addFriendship(sourceName:string,destName:string){
    if(this.hasUser(sourceName) && this.hasUser(destName)){
      const sourceNode = this.getUser(sourceName)
      const destNode = this.getUser(destName)
      this.graph.addVertice(sourceNode,destNode)
    }else if(this.hasFriendship(sourceName,destName)){
      throw "Friendship already added"
    }else{
      throw "One or more users not registered" 
    }
  }
}

const socialNetworkGraph = new SocialNetworkGraph();
socialNetworkGraph.addUser("juan")
socialNetworkGraph.addUser("jonas")
socialNetworkGraph.addUser("janete")
console.log("has user :", socialNetworkGraph.hasUser("juan"))
console.log("has user :", socialNetworkGraph.hasUser("jonas"))
console.log("has user :", socialNetworkGraph.hasUser("janete"))
console.log("has user :", socialNetworkGraph.hasUser("jan"))
socialNetworkGraph.addFriendship("juan","janete")
console.log(socialNetworkGraph.hasFriendship("juan","janete"))
console.log(socialNetworkGraph.hasFriendship("juan","jonas"))
