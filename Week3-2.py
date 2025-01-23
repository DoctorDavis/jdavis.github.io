# with open("iris.csv","r") as iris_file:
#     iris_data = iris_file.read()
#     print(iris_data)

with open("iris.csv","r") as iris_file:
     iris_data = iris_file.readlines()



irises = []

# for row in iris_data[1:]:
#     sepal_length, sepal_width, petal_length, petal_width, species = row.strip().split(",")
#     print(f"sepal_length: {sepal_length}")

for row in iris_data[1:]:
    sepal_length, sepal_width, petal_length, petal_width, species = row.strip().split(",") 
    iris_dict ={
         "sepal_length": sepal_length,
         "sepal_width": sepal_width,
         "petal_length": petal_length,
         "Petal_width": petal_width,
         "species": species
    }
    irises.append(iris_dict)

    # print(irises)

    longest_petal =0
    for iris in irises:
         current_petal_length = float(iris["petal_length"])
         if current_petal_length > longest_petal:
              longest_petal = current_petal_length


    print(f"longest petal length is {longest_petal}")



def insert_iris():
     sepal_length = input("enter Sepal Length: ")
     try:
          sepa_length =float(sepal_length)
     except typeerror:
          print("invalid sepal lenght")
     sepal_width = input("enter Sepal Width")
     petal_length = input("enter Petal Length")
     Petal_width = input("enter Petal Width")

     
new_iris = " {},{},{},{}".format(sepal_length,sepal_width,petal_length, petal_width, species)
with open("iris.csv","a") as iris_file:
     iris_file.write(new_iris)
