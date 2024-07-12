<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Category $category
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Category
      <small><?php echo __('Add'); ?></small>
    </h1>
    <ol class="breadcrumb">
      <li><a href="<?php echo $this->Url->build(['action' => 'index']); ?>"><i class="fa fa-dashboard"></i> <?php echo __('Home'); ?></a></li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <!-- general form elements -->
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title"><?php echo __('Form'); ?></h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <?php echo $this->Form->create($category, ['role' => 'form']); ?>
            <div class="box-body">
            <div class="form-group">
                        <label for="parent_name">Category</label>
                        <select name="parent_name" class="form-control" id="parent_name">
                            <option value="">--Select Category--</option>
                            <option value="Airfryer">Airfryer</option>
                            <option value="Cooker">Cooker</option>
                            <option value="Cooktop">Cooktop</option>
                            <option value="Induction">Induction</option>
                            <option value="Cookware">Cookware</option>
                            <option value="Cooking Appliances">Cooking Appliances</option>
                            <option value="Kitchen Appliances">Kitchen Appliances</option>
                            <option value="Breakfast and Snacks">Breakfast and Snacks</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Iron">Iron</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
              <?php
                echo $this->Form->control('name');
                // echo $this->Form->control('parent_name');
              ?>
            </div>
            <!-- /.box-body -->

          <?php echo $this->Form->submit(__('Submit')); ?>

          <?php echo $this->Form->end(); ?>
        </div>
        <!-- /.box -->
      </div>
  </div>
  <!-- /.row -->
</section>

