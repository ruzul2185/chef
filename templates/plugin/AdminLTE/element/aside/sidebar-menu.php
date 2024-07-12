<ul class="sidebar-menu" data-widget="tree">
  <li class="header">MAIN NAVIGATION</li>
  <li class="treeview">
    <a href="#">
      <i class="fa fa-dashboard"></i> <span>Users</span>
      <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu">
      <li><a href="<?php echo $this->Url->build('/users/add'); ?>"><i class="fa fa-circle-o"></i> New User</a></li>
      <li><a href="<?php echo $this->Url->build('/users'); ?>"><i class="fa fa-circle-o"></i>List of Users</a></li>
    </ul>
  </li>

    <li class="treeview">
        <a href="#">
            <i class="fa fa-dashboard"></i> <span>Categories</span>
            <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
        </a>
        <ul class="treeview-menu">
            <li><a href="<?php echo $this->Url->build('/categories/add'); ?>"><i class="fa fa-circle-o"></i> New Category</a></li>
            <li><a href="<?php echo $this->Url->build('/categories'); ?>"><i class="fa fa-circle-o"></i>List of Categories</a></li>
        </ul>
    </li>
    <li class="treeview">
        <a href="#">
            <i class="fa fa-dashboard"></i> <span>Images</span>
            <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
        </a>
        <ul class="treeview-menu">
            <li><a href="<?php echo $this->Url->build('/images/add'); ?>"><i class="fa fa-circle-o"></i> New Image</a></li>
            <li><a href="<?php echo $this->Url->build('/images'); ?>"><i class="fa fa-circle-o"></i>List of Images</a></li>
        </ul>
    </li>
    <li class="treeview">
        <a href="#">
            <i class="fa fa-dashboard"></i> <span>Products</span>
            <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
        </a>
        <ul class="treeview-menu">
            <li><a href="<?php echo $this->Url->build('/products/add'); ?>"><i class="fa fa-circle-o"></i> New Product</a></li>
            <li><a href="<?php echo $this->Url->build('/products'); ?>"><i class="fa fa-circle-o"></i>List of Products</a></li>
        </ul>
    </li>
    <li class="treeview">
        <a href="#">
            <i class="fa fa-dashboard"></i> <span>Reviews</span>
            <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
        </a>
        <ul class="treeview-menu">
            <li><a href="<?php echo $this->Url->build('/reviews/add'); ?>"><i class="fa fa-circle-o"></i> New Review</a></li>
            <li><a href="<?php echo $this->Url->build('/reviews'); ?>"><i class="fa fa-circle-o"></i>List of Reviews</a></li>
        </ul>
    </li>
    <li class="treeview">
        <a href="#">
            <i class="fa fa-dashboard"></i> <span>Image Type</span>
            <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
        </a>
        <ul class="treeview-menu">
            <li><a href="<?php echo $this->Url->build('/imageTypes/add'); ?>"><i class="fa fa-circle-o"></i> New Image Type</a></li>
            <li><a href="<?php echo $this->Url->build('/ImageTypes'); ?>"><i class="fa fa-circle-o"></i>List of Image Types</a></li>
        </ul>
    </li>

</ul>
