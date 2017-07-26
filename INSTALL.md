# Bystro installation
For most users, we recommend not installing the software, and using https://bystr.io, where the software is hosted

The web app provides full functionality for any size experiment (up to 890GB uncompressed/129GB compressed tested), a convenient search interface, and excellent performance

## Amazon AMI
Users of AWS can skip installation altogether, and use the latest public Bystro AMI

 1. Following [Amazon's instructions](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/usingsharedamis-finding.html), search for the "Bystro" Public AMI


## Installation on RPM-based distros
<h4>(Fedora, Redhat, Centos, openSUSE, Mandriva)</h4>

 1. ```wget https://github.com/akotlar/bystro/archive/master.zip -O bystro.zip && unzip bystro.zip && mv bystro-master bystro && cd $_ && ./install-rpm.sh```


## Configuring Bystro for annotation
Once Bystro is installed, it needs to be configured. The easiest step is choosing the species/assemblies to annotate.

1. Download the Bystro database for your species/assembly
 * **Example:**  hg38 (human reference GRCh38): ```wget https://s3.amazonaws.com/bystro-db/hg38.tar.gz```</strong> 
   * You need ~270GB of free space for human and mouse databases (less for all other species by at least half)
   * Databases are ~4.5x their compressed size when unpacked
  
2. Expand within some folder:
  * **Example:** ```pigz -d -c hg38.tar.gz | (cd /where/to/ && tar xvf -)```
3. Create a copy of the assembly config YAML file, and update its ```database_dir``` property to point to folder in which the database was expanded
  * **Example:**
    1. ```cp config/hg38.clean.yml config/hg38.yml && vim $_```
    2. Replace ```database_dir: '~'``` with ```database_dir:/where/to/```
 
## Databases:
1. Human (hg38): https://s3.amazonaws.com/bystro-db/hg38.tar.gz
2. Human (hg19): https://s3.amazonaws.com/bystro-db/hg19.tar.gz
3. Mouse (mm10): https://s3.amazonaws.com/bystro-db/mm10.tar.gz
4. Mouse (mm9): https://s3.amazonaws.com/bystro-db/mm9.tar.gz
5. Fly (dm6): https://s3.amazonaws.com/bystro-db/dm6.tar.gz
6. Rat (rn6): https://s3.amazonaws.com/bystro-db/rn6.tar.gz
7. Rhesus (rheMac8): https://s3.amazonaws.com/bystro-db/rheMac8.tar.gz
8. S.cerevisae (sacCer3): https://s3.amazonaws.com/bystro-db/sacCer3.tar.gz
9. C.elegans (ce11): 	https://s3.amazonaws.com/bystro-db/ce11.tar.gz