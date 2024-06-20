<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Image $image
 */
?>
<!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Image
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
          <?php echo $this->Form->create($image, ['role' => 'form','type'=>'file']); ?>
            <div class="box-body">
              <?php
                echo $this->Form->control('image[]', ['type' => 'file', 'multiple' => true]);
                // echo $this->Form->control('url');
                echo $this->Form->control('product_id', ['options' => $products->name, 'empty' => true]);
                echo $this->Form->control('review_id', ['options' => $reviews, 'empty' => true]);
                echo $this->Form->control('image_type_id', ['options' => $imageTypes, 'empty' => true]);
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

